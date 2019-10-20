import ReactDOM from "react-dom";

export default class Util {

    /**
     * 널이 아닌지 맞는지 체크
     * @param value 널 체크할 값
     * @return boolean
     */
    notNullCheck(value: any): boolean{
        if(value !== null && value !== undefined && value !== ''){
            return true;
        } else {
            return false;
        }
    }

    /**
     * Form 안에 있는 name이 가지고 있는 value 값을 Object로 반환
     * @param formRef Form을 가리키고 있는 ref
     * @return formObject 
     */
    getAllFormValues(formRef: any): any {
        const form: any = ReactDOM.findDOMNode(formRef);
		const formObject: any = Object.values(form.elements).reduce((obj: any, field: any) => {
			obj[field.name] = field.value;
			return obj;
        }, {});
        return formObject;
    }
};
