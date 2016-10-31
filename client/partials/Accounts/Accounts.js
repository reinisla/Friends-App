var myLogoutFunct = function() {
    FlowRouter.go('/');
}
AccountsTemplates.configure({termsUrl: 'terms-of-use',
  lowercaseUsername: false,
  onLogoutHook: myLogoutFunct});
AccountsTemplates.addFields([
    {
        _id: 'firstName',
        type: 'text',
        displayName: 'First Name',
        required: true,
        re: /(?=.*[a-z])(?=.*[A-Z])/,
    },
    {
        _id: 'lastName',
        type: 'text',
        displayName: 'Last Name',
        required: true,
        re: /(?=.*[a-z])(?=.*[A-Z])/,
    },
    {
        _id: "proffesion",
        type: "select",
        displayName: "Proffesion",
        select: [
            {
                text: "Developer",
                value: "developer"
            }, {
                text: "Physic",
                value: "physic"
            }
        ]
    }
]);
