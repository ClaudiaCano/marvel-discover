import React from "react";
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    SafeAreaView,
} from "react-native";
import Carousel from "react-native-snap-carousel";
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

    render() {
        return (
            <View style={styles.view}>
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
            </View>
        );
    }
}

export default MyCarousel;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
});
