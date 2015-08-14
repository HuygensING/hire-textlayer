import React from "react";


const HIGHLIGHT_CLASSNAME = "hi-annotation-highlight";

class Annotations extends React.Component {

	navigateToResult(id) {
		if(this.props.onNavigation) {
			this.props.onNavigation(id);
		}
	}

	renderAnnotation(annotation, i) {
		return annotation.type.name === "elab4:entrylink" ?
			(<li className={this.props.highlighted == annotation.n ? HIGHLIGHT_CLASSNAME : null} id={annotation.n} key={i}>
				<a onClick={this.navigateToResult.bind(this, annotation.text)}>{this.props.relatedLabel}</a>
			</li>)
			:
			(<li className={this.props.highlighted == annotation.n ? HIGHLIGHT_CLASSNAME : null} id={annotation.n} key={i}>
				<em>{annotation.type.name}</em>, <span dangerouslySetInnerHTML={{__html: annotation.text}} />
			</li>);
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
	onNavigation: React.PropTypes.func,
	relatedLabel: React.PropTypes.string
};

export default Annotations;