import * as React from "react";

class Page3 extends React.Component {
    //类似github页面加载的那个加载条
    componentDidMount() {
        console.log(this)
    }
    render () {
      return (
        <div>Page3</div>
      )
    }
  }

export default Page3;