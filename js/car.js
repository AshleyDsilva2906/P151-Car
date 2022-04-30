AFRAME.registerComponent("car", {
    schema: {
        modelRef: {type: "string", default: "tinker.obj"},
        clickCounter: {type: "number", default: 0},
    },

    init: function(){
       
        const position = {x: -10, y: 5, z: 20};
        const rotation = {x: 0, y: -10, z: 0};
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
        },

    
    

});