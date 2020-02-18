import React from "react";
import { View, WebView, Text } from "magic-script-components";

export class ExampleWebView extends React.Component {

  render() {

    return (
      <View name='main-view' >
        <WebView localPosition={[-0.4, 0.3, 0]} width={0.8} height={0.6} url={'http://google.com'}/>
      </View>
    );
  }
}