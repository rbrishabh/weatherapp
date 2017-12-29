


var getUser = (id, callback) => {
var user={
    id:id,
    name:"Rishabh"
};

setTimeout(()=>{callback(user);},3000);

};

getUser(27, (userObject)=>{
    console.log(userObject);
});

