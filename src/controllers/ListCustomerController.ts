import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersServices } from "../services/ListCustomersServices";

class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomerService = new ListCustomersServices();

    const customer = await listCustomerService.execute();

    reply.send(customer);
  }
}
export { ListCustomerController };
