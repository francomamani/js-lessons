class SocialNetworkQueries {

    constructor() {
        const user = {
            id: "mrouk3",
            likes: ["Moby Dick", "Crime and Punishment"],
            friends: [{
                id: "YazL",
                likes: ["Crime and Punishment", "Brave New World"],
            }, {
                id: "queen9",
                likes: ["Pride and Prejudice", "Crime and Punishment"],
            }, {
                id: "joyJoy",
                likes: ["Moby-Dick", "Pride and Prejudice"],
            }, {
                id: "0sin5k1",
                likes: ["Pride and Prejudice", "Brave New World"],
            }, {
                id: "mariP",
                likes: ["Moby-Dick", "Frankenstein", "Crime and Punishment"],
            }],
        };
        this.fetchCurrentUser = user;
    }

    findPotentialLikes(minimalScore) {
        // TODO: IMPLEMENT HERE
        const currentUser = this.fetchCurrentUser;
        const userLikes = currentUser.likes ?? []
        const friends = currentUser.friends ?? [];
        const minimalFriends = friends.length * minimalScore;

        const booksMap = new Map();
        friends
            .filter(friend => !!friend.likes)
            .forEach(({ likes }) => {
                const likesSet = new Set(likes);
                for (const like of likesSet) {
                    const quantity = booksMap.get(like) || 0;
                    booksMap.set(like, quantity + 1);
                }
            });
        userLikes.forEach((userLike) => {
            booksMap.delete(userLike);
        });
        let potentialLikes = [];
        for (const [key, value] of booksMap) {
            if (value >= minimalFriends) {
                potentialLikes.push({
                    book: key,
                    quantity: value
                });
            }
        }
        potentialLikes.sort((a, b) => {
            const substraction = b.quantity - a.quantity;
            return  substraction === 0 ? a.book.localeCompare(b.book, "en", { sensitivity: "base" }) : substraction;
        }).map(potentialLike => potentialLike.book);
        potentialLikes = potentialLikes.map(potentialLike => potentialLike.book);
        return potentialLikes;
    }

}

const instance = new SocialNetworkQueries();
const response = instance.findPotentialLikes(0.3);
console.log(response);