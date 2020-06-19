let WindowOnResizeInstance;// 对象实例

function WindowOnResizeObject() {
    this.functionArray = [];

    /**
     * 绑定函数方法
     * add function
     * @param func 需要具名函数
     */
    this.add = function (func) {
        if (func && typeof func === 'function') {
            let fn = this.functionArray.find(f => f === func);
            if (fn) {
                console.warn('函数已存在!');
            } else {
                this.functionArray.push(func);
                this.resize();
            }
        } else {
            throw '[window-onresize] Incoming argument type is not a function!';
        }
    };

    /**
     * 移除绑定
     * remove function
     * @param func 需要具名函数(否则不能删除)
     */
    this.remove = function (func) {
        if (func && typeof func === 'function') {
            let index = this.functionArray.findIndex(f => f === func);
            if (index > -1) {
                this.functionArray.splice(index, 1);
                this.resize();
            }
        } else {
            throw '[window-onresize] Incoming argument type is not a function!';
        }
    };

    /**
     * 重新赋值 window.onresize
     */
    this.resize = function () {
        window.onresize = () => {
            this.functionArray.forEach(f => {
                try {
                    f();
                } catch (e) {
                    console.error('Execution function error!', e);
                }
            })
        }
    }
}

/**
 * 获取对象实例
 * @returns {getWindowOnResizeInstance}
 */
const getWindowOnResizeInstance = (function () {
    if (!WindowOnResizeInstance) WindowOnResizeInstance = new WindowOnResizeObject();
    return WindowOnResizeInstance;
})();

export default getWindowOnResizeInstance;