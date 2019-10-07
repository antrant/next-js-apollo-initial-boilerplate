export default {
  'username': process.env.SQL_USERNAME || '',
  'password': process.env.SQL_PASSWORD || '',
  'database': process.env.SQL_DATABASE || 'TodoApp',
  'host': process.env.SQL_HOST || 'storage.sqlite',
  'dialect': process.env.SQL_DIALECT || 'sqlite',
  'operatorsAliases': 0,
};
