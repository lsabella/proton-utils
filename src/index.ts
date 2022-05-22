import _ from 'lodash'

const flatArray = (arrs:any) => {
    return _.flattenDeep(arrs);
}

const isBaishu = (name:string) => {
    return name === 'baishu'
}
export {
    isBaishu,
    flatArray
}