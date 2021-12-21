import EventEmitter from "events";
const nocors = "https://server.plexflex.tv/nocors/"
const base_url = "https://api.themoviedb.org/3";

const tokenValid = (expiration) => {
  const expirationDateTime = Date.parse(expiration);
  const now = Date.now();
  if (now < expirationDateTime) {
    return true;
  }
  return false;
};

const fetchNewToken = async (api_key) => {
  const response = await fetch(
    `${base_url}/authentication/token/new?api_key=${api_key}`
  );
  const responseJson = await response.json();
  if (responseJson.success === false) {
    throw JSON.stringify(responseJson);
  }
  return responseJson;
};

class TMDB {
  constructor(api_key, options) {
    this.api_key = api_key;
    this.options = {
      secure: false,
    };
    this.events = new EventEmitter();
    this._getToken();
    this._configurations();
  }

  async getDetails(endpoint, id) {
    const response = await this._makeRequest(`${endpoint}/${id}`);
    return this._fixPaths(response);
  }

  async search(endPoint, query) {
    const response = await this._makeRequest(`/search${endPoint}`, query);
    response.results = response.results.map((result) => {
      return this._fixPaths(result);
    });
    return response;
  }

  on(event, callback) {
    this.events.on(event, callback);
  }

  async _configurations() {
    this.configs = await this._makeRequest("/configuration");
    this.events.emit("configured", this.configs);
  }

  async _getToken() {
    var localAuthString = localStorage.getItem("tmdb_auth_token");
    if (localAuthString) {
      const { expires_at, request_token } = JSON.parse(localAuthString);
      if (expires_at && tokenValid(expires_at)) {
        this.request_token = request_token;
      } else {
        const { request_token, expires_at } = await fetchNewToken(this.api_key);
        localStorage.setItem(
          "tmdb_auth_token",
          JSON.stringify({ request_token, expires_at })
        );
        this.request_token = request_token;
      }
    } else {
      const { request_token, expires_at } = await fetchNewToken(this.api_key);
      localStorage.setItem(
        "tmdb_auth_token",
        JSON.stringify({ request_token, expires_at })
      );
      this.request_token = request_token;
    }
  }

  _getHeaders() {
    return {
      Authorization: `Bearer ${this.request_token}`,
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*",
      mode: 'no-cors'      
    };
  }

  async _makeRequest(endPoint, query = {}) {
    const headers = this._getHeaders();
    query = { ...query, api_key: this.api_key };
    const queryString = new URLSearchParams(query);
    const body = JSON.stringify({url:`${base_url}${endPoint}?${queryString}`});
    const request = await fetch(nocors,{
      method:"POST",
      body,
      headers,
    });
    return await request.json();
  }

  _fixPaths(result) {
    const fixedPaths = result;
    const base_url = this.options.secure
      ? this.configs.images.secure_base_url
      : this.configs.images.base_url;
    if (result.poster_path) {
      const sizes = {};
      fixedPaths.poster_path = this.configs.images.poster_sizes.forEach(
        (size) => {
          sizes[size] = `${base_url}/${size}/${result.poster_path}`;
        }
      );
      result.poster_path = sizes;
    }
    if (result.seasons) {
      result.seasons = result.seasons.map((season) => this._fixPaths(season));
    }
    if (result.backdrop_path) {
      const sizes = {};
      fixedPaths.logo = this.configs.images.backdrop_sizes.forEach((size) => {
        sizes[size] = `${base_url}/${size}/${result.backdrop_path}`;
      });
      result.backdrop_path = sizes;
    }

    return fixedPaths;
  }
}

export default TMDB;
