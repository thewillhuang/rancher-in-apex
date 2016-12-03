import λ from 'apex.js';
import { paramsSync, kdf } from 'scrypt';

const scryptParam = paramsSync(0.025);

const generateHash = password =>
  kdf(new Buffer(password), scryptParam)
    .then(result => result.toString('base64'));

export default λ(async (e) => {
  const { body: { password } } = e;
  console.log('password', password);
  return await generateHash(password);
});
