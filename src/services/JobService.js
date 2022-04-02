import { apiPath, httpMethods } from '../common/enums';
import { BASE_API_URL } from '../common/constants';

class JobService {
  #httpService;
  #baseUrl = `${BASE_API_URL}${apiPath.JOBS}`;

  constructor({ httpService }) {
    this.#httpService = httpService;
  }

  getAll() {
    return this.#httpService.makeRequest(this.#baseUrl, {
      method: httpMethods.GET
    });
  }

  create(body) {
    return this.#httpService.makeRequest(this.#baseUrl, {
      method: httpMethods.POST,
      body: {
        ...body,
        date_created: {
          ".sv":"timestamp"
        },
      }
    });
  }

  delete(id){
    return this.#httpService.makeRequest(this.#baseUrl, {
      method: httpMethods.DELETE,
      queryParams: id
    });
  }
}

export default JobService;
