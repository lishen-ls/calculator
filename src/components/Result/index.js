import React from "react";
import "./index.css";
export default class Result extends React.Component {
  render() {
    let { value, result } = this.props;
    return (
      <div className="display-box">
        <div
          className="computing"
          ref={ref => {
            if (ref) {
              ref.scrollTo(0, ref.scrollHeight);
            }
          }}
        >
          {value.join(" ")}
        </div>
        <div className="result-outside">
          <div
            ref={ref => {
              if (ref) {
                let inHeight = ref.offsetHeight;
                if (String(result).length >= 14 && inHeight > 50) {
                  ref.setAttribute(
                    "style",
                    `font-size:${(50 / inHeight) * 36}px;`
                  );
                }
                if (String(result).length < 14) {
                  ref.removeAttribute("style");
                }
              }
            }}
            className="result-inside"
          >
            {result}
          </div>
        </div>
      </div>
    );
  }
}
