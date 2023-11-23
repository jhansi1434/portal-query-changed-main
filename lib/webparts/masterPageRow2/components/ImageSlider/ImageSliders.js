import * as React from 'react';
import "../MasterPageRow2.scss";
import "./ImageSlider.scss";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "@pnp/sp/profiles";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
var ImageSliders = function (props) {
    var _a = React.useState(false), loading = _a[0], setLoading = _a[1];
    console.log(props);
    var arr = [];
    arr = props.data;
    console.log(arr);
    React.useEffect(function () {
        setLoading(true);
        setTimeout(function () {
            setLoading(false);
        }, 500);
    }, []);
    if (loading) {
        return (React.createElement("div", { className: 'whiteScreen' }));
    }
    else {
        return (React.createElement(React.Fragment, null,
            React.createElement(Slide, null, props.data && props.data.map(function (x) {
                return (React.createElement("div", { className: 'each-slide' },
                    React.createElement("img", { src: x })));
            }))));
    }
};
export default ImageSliders;
//# sourceMappingURL=ImageSliders.js.map