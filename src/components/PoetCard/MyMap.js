// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
//
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//
// class SimpleMap extends Component {
//     static defaultProps = {
//         center: {
//             lat: 59.95,
//             lng: 30.33
//         },
//         zoom: 11
//     };
//
//     render() {
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19296.37523861168!2d27.1897222!3d54.1100086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbec59040878cd%3A0x89c684e28491971f!2z0JLRj9C30YvQvdC60LA!5e1!3m2!1sru!2sby!4v1621789990393!5m2!1sru!2sby" }
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                 >
//                     <AnyReactComponent
//                         lat={59.955413}
//                         lng={30.337844}
//                         text="My Marker"
//                     />
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }
//
// export default SimpleMap;