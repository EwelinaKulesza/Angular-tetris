import { MyPipe2Pipe } from './my-pipe2.pipe';

describe('MyPipe2Pipe', () => {
  it('create an instance', () => {
    const pipe = new MyPipe2Pipe();
    expect(pipe).toBeTruthy();
  });
});
