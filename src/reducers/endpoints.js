export default class Endpoints {
  constructor(version) {
    this.version = version;
  }

  version = "/api/v1";

  companiesEndpoint = this.version + "/Companies";
  latestEndpoint = this.version + "/App/Latest";
  aktuelsEndpoint = this.version + "/Companies/";
  aktuelPagesEndpoint = this.version + "/Aktuels/";
  searchEndpoint = this.version + "/Aktuels/Search";
}
