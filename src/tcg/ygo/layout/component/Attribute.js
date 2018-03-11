define(["react", "react-class", "../../Attributes", "draw/Image"], function Attribute(React, ReactClass, Attributes, Image)
{
	var Attribute = ReactClass({
		render: function render()
		{
			var props = Object.assign({}, this.props, {
				// Maps the attribute to a path name
				src: Attributes[this.props.value].url,
			});
			return React.createElement(Image, { this.props.value, style: {
				// Positioning based on 420 × 610.
				left:  350,
				top:    28,
				width:  40,
				height: 40,
			}});
		}
	});
	Attribute.displayName = "Attribute";
	Attribute.defaultProps = {
		value: "None",
	};
	
	return Attribute;
});
