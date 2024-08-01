export class ResponsePagination {
  static serialize(data: any) {
    return {
      id: data.id,
      name: data.name,
      // address: `${data.address.address} ${data.address.number} - ${data.address.city}`,
      phone: data.personal_data?.phone
    }
  }
}