import React from "react";
import {
    StyleSheet,
    View,
    Dimensions,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselItem from "../components/CarouselItem";

import ItemImage1 from "../assets/CarouselItem1.jpg";
import ItemImage2 from "../assets/CarouselItem2.jpg";
import ItemImage3 from "../assets/CarouselItem3.jpg";

export class MyCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Avenging Women",
                    image: ItemImage1,
                },
                {
                    title: "New adventures",
                    image: ItemImage2,
                },
                {
                    title: "All stories",
                    image: ItemImage3,
                },
            ],
        };
    }

    _renderItem({ item, index }) {
        return (
            <View>
                <CarouselItem Title={item.title} Img={item.image} />
            </View>
        );
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={this.state.carouselItems.length}
              activeDotIndex={this.state.activeIndex}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)'}}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 0,
                  margin: 0,
                  backgroundColor: 'rgba(94, 0, 156, 0.6)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.5}
              inactiveDotScale={1}
            />
        );
    }

    render() {
        return (
            <View>
                <Carousel
                    layout={"default"}
                    ref={(ref) => (this.carousel = ref)}
                    data={this.state.carouselItems}
                    sliderWidth={Dimensions.get("screen").width}
                    itemWidth={Dimensions.get("screen").width}
                    renderItem={this._renderItem}
                    onSnapToItem={(index) =>
                        this.setState({ activeIndex: index })
                    }
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                />
                <View style={styles.pagination}>
                { this.pagination }
                </View>
            </View>
        );
    }
}

export default MyCarousel;

const styles = StyleSheet.create({
    pagination: {
        width: Dimensions.get("screen").width,
        position: "absolute",
        top: 160,
        backgroundColor: 'rgba(0, 0, 0, 0)'    
    },
});
