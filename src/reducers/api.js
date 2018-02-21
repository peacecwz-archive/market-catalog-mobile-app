import axios from "axios";

const baseUrl = "https://aktuellistesi.azurewebsites.net";
const version = "/api/v1";
const companiesEndpoint = baseUrl + version + "/Companies";
const latestEndpoint = baseUrl + version + "/App/Latest";
const aktuelsEndpoint = baseUrl + version + "/Companies/";
const aktuelPagesEndpoint = baseUrl + version + "/Aktuels/";
const searchEndpoint = baseUrl + version + "/Aktuels/Search";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

class API {
  getCompanies() {
    return axios.get(companiesEndpoint, config);
  }

  getLatest() {
    return axios.get(latestEndpoint, config);
  }

  getAktuels(companyId) {
    return axios.get(aktuelsEndpoint + companyId + "/aktuels", config);
  }

  getAktuelPages(aktuelId) {
    return axios.get(aktuelPagesEndpoint + aktuelId + "/aktuelPages", config);
  }

  search(query) {
    return axios.get(searchEndpoint + "?query=" + query, config);
  }
}

export default new API();
