import sampleData from "../res/sample-data";
import React from "react/addons";
import TextLayer from "../src";
import should from "should";

let TestUtils = React.addons.TestUtils;

describe("TextLayer", function() {

	it("should be a ReactElement", function() {
		TestUtils.isElement(<TextLayer data={sampleData} label="test label" />);
	});
});
