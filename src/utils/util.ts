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
};
