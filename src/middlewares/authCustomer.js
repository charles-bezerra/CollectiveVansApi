import { NoPermision } from "../core/messages";
import { isAuth } from "../services/auth.service";

function authCustomer (request, response, action) {
	if (isAuth(request)) {
		action(); 
	}
	else {
		response.status = 403;
		response.json(NoPermision);
	}
}

export default authCustomer;