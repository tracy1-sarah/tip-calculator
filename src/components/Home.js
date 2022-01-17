import React from "react";
import Button from "./Button";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <form className="form-container">
            <div className="form-control">
              <label>Bill</label>
              <div className="input-icons">
                <i className="fa fa-dollar icon"></i>
                <input type="text" />
              </div>
            </div>

            <div>
              <Button text="5%" />
              <Button text="10%" />
              <Button text="15%" />
            </div>
            <div>
              <Button text="25%" />
              <Button text="50%" />
              <Button text="Custom" />
            </div>

            <div className="form-control">
              <label>Number of People</label>
              <div className="input-icons">
                <i className="fa fa-user icon"></i>
                <input type="text" />
              </div>
            </div>
          </form>
        </div>

        <div className="col-lg-6 col-sm-12 column-2">
          <div className="row">
            <div className="col">
              <span className="my-tip-text-1">Tip Amount</span>
              <br />
              <span className="my-tip-text-2">/person</span>
            </div>
            <div className="col">
              <h1 className="my-tip-h1">$5.8</h1>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <span className="my-tip-text-1">Total</span>
              <br />
              <span className="my-tip-text-2">/person</span>
            </div>
            <div className="col">
              <h1 className="my-tip-h1">$5.8</h1>
            </div>
          </div>
          <br/>
          <br/>
          <button className="btn reset-button">RESET</button>
        </div>
      </div>
    </div>
  );
}
