import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  useColorScheme,
  ScrollView
} from "react-native";

import FlatCards from "../../../../components/FlatCards";
import ElevatedCards from "../../../../components/ElevatedCards";
import FancyCard from "../../../../components/FancyCard";

const Home = () => {
  return(
    <SafeAreaView>
      <ScrollView>

        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;