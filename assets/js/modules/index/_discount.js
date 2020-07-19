import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.min"

class DiscountAnimation{
    constructor(){

        this.tours = document.querySelector('#tours');
        this.tourDiscountInfo = document.querySelector('.tours__info__discount');

        this.initWaypoints();
    }

    initWaypoints(){
        let that = this;
        new Waypoint({
            element: that.tours,
            handler: (direction)=> {
                that.toggleDiscount();
            },
            offset: '60%'
        });
    }

    toggleDiscount(){
        this.tourDiscountInfo.classList.toggle('tours__info__discount--show');
    }
}

export default DiscountAnimation;