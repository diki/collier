Template.navigation.events({
    "submit #loginForm": function(e){
        e.preventDefault();
        return false;
    },
    
    "click #userLoginButton": function() {
        console.log("hebele hublee");
    }
});