import http from "../http-common";

class CustomerDataService {
  getAll() {
    return http.get("/customers");
  }

  get(id) {
    return http.get(`/customers/${id}`);
  }

  create(data) {
    console.log("customer srvice create is called");
    console.log(data);
    return http.post("/createCustomers", data);
  }

  update(id, data) {
    return http.put(`/customers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/customers/${id}`);
  }

  deleteAll() {
    return http.delete(`/customers`);
  }

  findByTitle(name) {
    return http.get(`/customers?name=${name}`);
  }
}

export default new CustomerDataService();