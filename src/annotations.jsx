import React from "react";


const HIGHLIGHT_CLASSNAME = "hi-annotation-highlight";

class Annotations extends React.Component {

	navigateToResult(id) {
		if(this.props.onNavigation) { this.props.onNavigation(id); }
	}

	onHover(annotationId) {
		if(this.props.onHover) { this.props.onHover("" + annotationId); }
	}

	renderAnnotation(annotation, i) {
		let inner = annotation.type.name === "elab4:entrylink" ?
			<a onClick={this.navigateToResult.bind(this, annotation.text)}>{this.props.relatedLabel}</a> :
			<a href={"#" + annotation.n + "-text"} ><em>{annotation.type.name}</em>, <span dangerouslySetInnerHTML={{__html: annotation.text}} /></a>;

		return (
			<li className={this.props.highlighted == annotation.n ? HIGHLIGHT_CLASSNAME : null} 
				id={annotation.n} 
				key={i}
				onMouseOut={this.onHover.bind(this, "")}
				onMouseOver={this.onHover.bind(this, annotation.n)}>
				{inner}
			</li>
		);
	}

	render() {
		return (
			<ol className="hi-annotations">
				{this.props.data.map(this.renderAnnotation.bind(this))}
			</ol>
		)
	}
}

Annotations.propTypes = {
	data: React.PropTypes.array,
	highlighted: React.PropTypes.string,
	onHover: React.PropTypes.func,
	onNavigation: React.PropTypes.func,
	relatedLabel: React.PropTypes.string
};

export default Annotations;