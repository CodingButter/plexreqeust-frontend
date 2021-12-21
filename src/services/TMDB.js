const EventEmitter = require("events");
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
  constructor(api_key, definition) {
    this.api_key = api_key;

    const defaults = {
      secure: false,
      images: {
        poster: {
          default: "https://via.placeholder.com/185x278",
          size: "w185",
        },
        backdrop: {
          default: "https://via.placeholder.com/185x278",
          size: "w780",
        },
      },
    };
    this.events = new EventEmitter();
    Object.assign(this, defaults, definition);
    this._getToken();
    this._configurations();
  }

  async getDetails(endpoint, id) {
    const response = await this._makeRequest(`${endpoint}/${id}`);
    return this._normalize(response);
  }

  async search(endPoint, query) {
    const response = await this._makeRequest(`/search${endPoint}`, query);
    response.results = response.results.map((result) => {
      return this._normalize(result);
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
       mode:"no-cors"
    };
  }

  async _makeRequest(endPoint, query = {}) {
    const headers = this._getHeaders();
    query = { ...query, api_key: this.api_key };
    const queryString = new URLSearchParams(query);

    const request = await fetch(`${base_url}${endPoint}?${queryString}`, {
      headers,
     
    });
    return await request.json();
  }

  _fixPaths(result) {
    const fixedPaths = result;
    const base_url = this.secure
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

  _normalize(result) {
    result = this._fixPaths(result);
    result.title = result.title || result.name;
    result.poster =
      (result.poster_path && result.poster_path[this.images.poster.size]) ||
      result.poster_path ||
      this.images.poster.default;
    result.backdrop =
      (result.backdrop_path &&
        result.backdrop_path[this.images.backdrop.size]) ||
      this.images.backdrop.default;
    result.release_date = result.release_date || result.first_air_date || "";
    result.year = result.release_date.split("-")[0];
    result.tmdb = result.id;
    if (result.seasons) {
      result.seasons = result.seasons.map((season) => this._normalize(season));
    }
    return result;
  }
}

module.exports = TMDB;
