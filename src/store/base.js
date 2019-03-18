import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// TODO: When assigning id - check it doesnt already exist
export const baseStore = {
    state() {
        return {
            tests: [],
            testIds: []
        }
    },
    mutations: {
        clearTests(state) {
            state.testIds.length = 0
            state.tests.length = 0
        },
        installTestIds(state, testIds) {
            for (let i in testIds) {
                state.testIds.push(testIds[i])
            }
        },
        installTest(state, test) {
            state.tests.push(test)
        },
        installTestVariable(state, testDesc) {
            // testDesc is { testId: id, variable: variable }
            const testIndex = state.tests.findIndex(function (test) {
                return test.id === testDesc.testId
            })
            if (testIndex === -1) { throw `Cannot find test id ${testDesc.id} in installTestVariable` }
            state.tests[testIndex].variables.push(testDesc.variable)
        }
    },
    getters: {

    }
}
