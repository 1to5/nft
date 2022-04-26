//docs example sdk
import { Connection, programs } from '@metaplex/js';
const { metadata: { Metadata } } = programs;

const connection = new Connection('devnet');
const tokenPublicKey = 'Gz3vYbpsB2agTsAwedtvtTkQ1CG9vsioqLW3r9ecNpvZ';

const run = async () => {
  try {
    const ownedMetadata = await Metadata.load(connection, tokenPublicKey);
    console.log(ownedMetadata);
  } catch {
    console.log('Failed to fetch metadata');
  }
};

run();
