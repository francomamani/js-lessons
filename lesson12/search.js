class ClientService  {
    constructor() {
    }

    search(clients, value) {
        return clients.filter((client) => client.name.includes(value));
    }

    exists(value) {
        return clients.some((client) => client.name === value);
    }

    add(clients, client) {
        // spread operator
        return [...clients, client];
    }

    isOlder(clients) {
        // age >= 18
        return clients.filter((client) => client.age >= 18);
    }

    countAges(clients) {
        return clients.reduce((acc, cur) => acc + cur.age, 0);
    }

    findClient(clients, value) {
        return clients.find((client) => client.name.includes(value));
    }

    uniqueValues(values) {
        const valuesSet = new Set(values);
        return Array.from(valuesSet.values());
    }


}
const clients = [{name: 'franco', age: 33}, {name: 'megan', age: 25}];
const values = [1,3,5,2,6,3,2,1,5,2,1,3,65,6];
const clientService = new ClientService();
console.log(clientService.uniqueValues(values));
