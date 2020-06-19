let WindowResizeInstance;// 对象实例

class WindowResize {
    #functionArray = [];// Private properties

    /**
     * 绑定函数方法
     * @param func 需要具名函数
     */
    add(func) {
        if (func && typeof func === 'function') {
            let fn = this.#functionArray.find(f => f === func);
            if (fn) {
                console.warn('函数已存在!');
            } else {
                this.#functionArray.push(func);
                this.resize();
            }
        } else {
            throw 'Incoming argument type is not a function!';
        }
    }

    /**
     * 移除方法
     * @param func 需要具名函数(否则不能删除)
     */
    remove(func) {
        if (func && typeof func === 'function') {
            let index = this.#functionArray.findIndex(f => f === func);
            if (index > -1) {
                this.#functionArray.splice(index, 1);
                this.resize();
            }
        } else {
            throw 'Incoming argument type is not a function!';
        }
    }

    /**
     * 重新赋值 window.onresize
     */
    resize() {
        window.onresize = () => {
            this.#functionArray.forEach(f => {
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
 * @returns {WindowResize}
 */
const getWindowResizeInstance = () => {
    if (!WindowResizeInstance) WindowResizeInstance = new WindowResize();
    return WindowResizeInstance;
};

module.exports = getWindowResizeInstance();