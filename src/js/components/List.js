// src/js/components/List.js

import React from "react";
import { connect } from "react-redux";

const mapStatetoProps = state => {
	return { articles: state.articles};
};

const ConnectedList = ({ articles }) => (
	<ul>
		{articles.map(el => (
			<li key={el.id}>{el.title}</li>
		))}
	</ul>
);

const List = connect(mapStatetoProps)(ConnectedList);

export default List;