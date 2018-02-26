import axios from "axios";
import Endpoints from "./endpoints";

class API {
  client = axios.create({
    baseURL: "https://aktuellistesi.azurewebsites.net",
    headers: {
      "Content-Type": "application/json"
    }
  });
  endpoints = new Endpoints("/api/v1");

  getCompanies() {
    return this.client.get(this.endpoints.companiesEndpoint);
  }

  getLatest() {
    return this.client.get(this.endpoints.latestEndpoint);
  }

  getAktuels(companyId) {
    return this.client.get(
      this.endpoints.aktuelsEndpoint + companyId + "/aktuels"
    );
  }

  getAktuelPages(aktuelId) {
    return this.client.get(
      this.endpoints.aktuelPagesEndpoint + aktuelId + "/aktuelPages"
    );
  }

  search(query) {
    return this.client.get(
      this.endpoints.searchEndpoint + "?query=" + query
    );
  }
}

export default new API();
