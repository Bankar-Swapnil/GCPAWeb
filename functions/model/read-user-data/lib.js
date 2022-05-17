const { db } = require("../application/lib");

exports.update_registration = function(inputJson, uid) {
    const editRegistrationPromise = db.collection("Users").doc(uid).update(inputJson);
    return Promise.resolve(editRegistrationPromise);
};

exports.getUsersRegistrations = function(UserUid) {

    let query = db.collection("Registrations");

    query = query.where("UserUid", "==", UserUid);

    const promise = query.get().then((doc) => {
        const data = [];
        doc.forEach((element) => {
            if (element.exists) {
                data.push(element.data());
            }
        });
        return data;
    });

    return Promise.resolve(promise);

}