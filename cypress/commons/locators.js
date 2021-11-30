const locators = {
    LOGIN: {
        EMAIL: '#email',
        PASSWORD: '#password',
        LINK_LOGIN: '.navbar-nav a:contains(Login)',
        BTN_LOGIN: 'button[type="submit"]',
    },
    NOTES: {
        TEXT_AREA: '#content',
        LIST_GROUP: '.list-group',
        LIST_GROUP_UPDATED: '.list-group:contains(My note updated)',
        BTN_NEW_NOTE: 'Create a new note',
        BTN_CREATE_NEW_NOTE: 'Create',
        BTN_SAVE_UPDATE_NOTE: 'Save',
        BTN_DELETE_NOTE: 'Delete',        
    },
};

export default locators;
