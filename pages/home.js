import React from "react";
import Head from "next/head";

export default function home() {
  return (
    <div>
      <div className="container search-box">
        {console.log("this is the cheker", this.props)}

        {this.props.hide ? (
          <InputGroup
            className="mb-3"
            onChange={this.question}
            value={this.state.ask}
          >
            <FormControl
              placeholder="ask anything?"
              aria-label="ask anything?"
              aria-label="ask anything?"
              aria-describedby="basic-addon2"
            />
            <Button
              type="submit"
              disabled={!this.state.ask}
              onClick={this.clickQuestion}
              variant="outline-secondary"
              id="button-addon2"
            >
              ask?
            </Button>
          </InputGroup>
        ) : null}
        <Question myProp={this.state.items} />
      </div>
    </div>
  );
}
