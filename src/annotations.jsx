import React from "react";


const HIGHLIGHT_CLASSNAME = "hi-annotation-highlight";

class Annotations extends React.Component {

	onHover(annotationId) {
		if(this.props.onHover) { this.props.onHover("" + annotationId); }
	}

	onClick(annotationId) {
		if(this.props.onClick) { this.props.onClick(annotationId + "-text"); }
	}

	renderAnnotation(annotation, i) {
		return (
			<li className={this.props.highlighted == annotation.n ? HIGHLIGHT_CLASSNAME : null}
				id={annotation.n}
				key={i}
				onClick={this.onClick.bind(this, annotation.n)}
				onMouseOut={this.onHover.bind(this, "")}
				onMouseOver={this.onHover.bind(this, annotation.n)}>
				<em>{annotation.type.name}</em>, <span dangerouslySetInnerHTML={{__html: annotation.text}} />
			</li>
		);
	}

	render() {
		return (
			<ol className="hi-annotations">
				{this.props.data.map(this.renderAnnotation.bind(this))}
			</ol>
		);
	}
}

Annotations.propTypes = {
	data: React.PropTypes.array,
	highlighted: React.PropTypes.string,
	onClick: React.PropTypes.func,
	onHover: React.PropTypes.func,
	relatedLabel: React.PropTypes.string
};

export default Annotations;