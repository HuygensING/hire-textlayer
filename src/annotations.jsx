import React from "react";



class Annotations extends React.Component {

	navigateToResult(id) {
		if(this.props.onNavigation) {
			this.props.onNavigation(id);
		}
	}

	renderAnnotation(annotation, i) {
		return annotation.type.name === "elab4:entrylink" ?
			(<div className={this.props.highlighted == annotation.n ? "highlighted" : null} id={annotation.n} key={i}>
				<a onClick={this.navigateToResult.bind(this, annotation.text)}>Gerelateerd aan</a>
			</div>)
			:
			(<div className={this.props.highlighted == annotation.n ? "highlighted" : null} id={annotation.n} key={i}>
				<em>{annotation.type.name}</em>, <span dangerouslySetInnerHTML={{__html: annotation.text}} />
			</div>);
	}

	render() {
		return (
			<div className="annotations">
				{this.props.data.map(this.renderAnnotation.bind(this))}
			</div>
		)
	}
}

Annotations.propTypes = {
	data: React.PropTypes.array,
	highlighted: React.PropTypes.string,
	onNavigation: React.PropTypes.func
};



export default Annotations;