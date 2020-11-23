
 
import {parse} from 'query-string';
 


export const getPaginator = search => {
	const parsedSearch = parse(search);
 
	const currentPage = parsedSearch.page ?  Number(parsedSearch.page) : 1;
	/*   const offset = currentPage * limit - limit */
	return{currentPage};
};
