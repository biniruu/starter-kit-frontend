/**
 * Documentation
 * {@link https://eslint.org/docs/latest/}
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  /**
   * Extends
   *
   * eslint:recommended : eslint 추천 rule set
   * plugin:import/recommended : eslint-plugin-import 추천 rule set
   * plugin:import/typescript : eslint-plugin-import 플러그인
   * plugin:prettier/recommended : eslint-config-prettier 추천 rule set
   */
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      /**
       * Jest
       *
       * plugin:jest/recommended : eslint-plugin-jest 추천 rule set
       */
      extends: ['plugin:jest/recommended'],
      files: ['*.spec.js', '*.test.js'],
      rules: {
        /**
         * Rules
         * {@link https://github.com/jest-community/eslint-plugin-jest#rules}
         */
      },
    },
  ],
  parser: '@babel/eslint-parser',
  plugins: ['pug'],
  root: true, // 현재 설정 파일이 root임을 명시하는 옵션. true로 설정하면 상위 설정 파일 찾기를 여기서 멈춘다.
  rules: {
    /**
     * Rules reference
     * {@link https://eslint.org/docs/latest/rules}
     *
     * camelcase : 카멜 케이스 작명 방식 강제
     * eqeqeq : 일치 연산자(===) 사용 강제. 동등 연산자(==) 사용 금지
     * new-cap : 'new' 연산자로 인스턴스 생성 시 constructor 함수명의 첫 글자를 대문자로 강제
     * no-array-constructor : Array() 생성자에 배열 리터럴 생성법을 사용해서 배열 생성 금지
     * no-console : 콘솔 사용 금지
     * no-debugger : debugger 사용 금지
     * no-duplicate-imports : 동일한 모듈에서 import를 여러 번 할 경우 모든 import를 inline으로 작성하도록 강제. eslint-plugin-import > import/no-duplicates의 prefer-inline 값이 true인 경우에는 off로 설정할 것
     * no-inner-declarations : nested block에서 변수 또는 함수 선언 금지
     * no-nested-ternary : 중첩 삼항 연산자 금지
     * no-new-object : new Object로 객체 생성 금지
     * no-undef : 정의하지 않은 전역 변수는 /✱ global ... ✱/ 주석에 명시해야 사용 가능하도록 강제
     * no-underscore-dangle : 식별자 뒤에 언더스코어를 붙이지 못하도록 강제
     * no-unused-vars : 사용하지 않는 변수 금지
     * no-useless-escape : 불필요한 escape 문자 사용 금지. extends에 eslint:recommended를 설정했을 때 동작한다
     * no-var : var로 변수 선언 금지
     * prefer-const : 재할당이 이루어지지 않는 변수에 let을 사용했을 경우 const로 변경하도록 강제
     * prefer-rest-params : 함수의 parameter에서 arguments 객체 대신 rest parameter를 사용하도록 강제. e.g. function (...args) {}
     * quotes : 따옴표를 작은따옴표, 큰따옴표, 백틱 중 한 가지만 사용하도록 강제
     * semi : 세미콜론 사용 여부. 'never' 옵션은 semicolon before self-invoking function을 제외한 모든 세미콜론 사용 금지
     * sort-imports : import 정렬
     * sort-imports > ignoreCase의 값은 항상 default값(false)으로 놔둘 것. true로 했을 때 가끔 다른 import 정렬 관련 rule과 충돌 발생
     * sort-imports > ignoreDeclarationSort는 항상 true로 할 것. false로 하면 import 정렬 관련 경고 발생 시 해결 불가
     * sort-imports > ignoreMemberSort는 항상 true로 할 것. false로 하면 typescript에서 type-only import를 inline으로 정의할 때 정렬 에러 발생
     * space-before-function-paren : 함수 선언 시 함수명과 괄호 사이에 간격 추가를 강제
     */
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    eqeqeq: 'error',
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-duplicate-imports': 'off',
    'no-inner-declarations': 'warn',
    'no-nested-ternary': 'warn',
    'no-new-object': 'warn',
    'no-undef': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'all',
      },
    ],
    'no-useless-escape': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'never'],
    'sort-imports': [
      'warn',
      {
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
      },
    ],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    /**
     * Eslint-config-prettier options
     * {@link https://github.com/prettier/eslint-plugin-prettier#options}
     *
     * 공식 문서에서는 옵션 설정을 추천하지 않는다. prettier-vscode 확장 프로그램이 .prettierrc 파일을 읽고 이곳에 있는 옵션은 무시하는데, 이 때문에 예상치 못한 문제가 발생할 수도 있기 때문.
     *
     * prettier : 이곳에 설정한 옵션은 .prettier 파일에 있는 옵션을 덮어쓴다.
     */
    'prettier/prettier': 'warn',
    /**
     * Eslint-plugin-import rules
     * {@link https://github.com/import-js/eslint-plugin-import#rules}
     *
     * newline-after-import : import 다음에 한 줄 띄기
     * no-anonymous-default-export : 익명 default export 금지
     * no-duplicates : 동일한 모듈에서 import를 여러 번 할 경우 모든 import를 inline 또는 top-level로 강제
     * no-unresolved : import한 파일/모듈이 unresolved 되는 일이 없도록 방지
     * order : import 자동 정렬
     * order > warnOnUnassignedImports는 항상 default값(false)으로 놔둘 것. true로 할 경우 import 정렬 관련 경고가 발생하는데, 이 문제는 import/order 또는 sort-import 설정만으로는 해결 불가
     * order > caseInsensitive의 값은 항상 default값(false)으로 놔둘 것. true로 했을 때 가끔 다른 import 정렬 관련 rule과 충돌 발생
     */
    'import/newline-after-import': 'warn',
    'import/no-anonymous-default-export': [
      'warn',
      {
        allowArray: true,
        allowObject: true,
      },
    ],
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    /**
     * Eslint-plugin-import resolvers
     * {@link https://github.com/import-js/eslint-plugin-import#resolvers}
     * {@link https://github.com/import-js/eslint-plugin-import#importextensions}
     *
     * resolver.node.extensions : require more granular extension definitions. jsx를 import할 때 import/no-unresolved 에러가 발생하지 않도록 함
     */
    'import/resolver': {
      node: {
        extensions: ['*.js', '*.jsx'],
      },
    },
    /**
     * Jest version setting
     * {@link https://github.com/jest-community/eslint-plugin-jest#jest-version-setting}
     *
     * fetch the installed version of Jest
     */
    jest: {
      version: require('jest/package.json').version,
    },
  },
}
