// jest.config.js
// Configuração do Jest para testes

module.exports = {
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testMatch: ['**/tests/**/*.test.js'],
    collectCoverageFrom: [
        'models/**/*.js',
        'controllers/**/*.js',
        'services/**/*.js',
        '!**/node_modules/**'
    ]
};

