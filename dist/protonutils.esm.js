import _ from 'lodash';

const flatArray = (arrs) => {
    return _.flattenDeep(arrs);
};
const isBaishu = (name) => {
    return name === 'baishu';
};

export { flatArray, isBaishu };
