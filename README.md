# failedTest
A test I failed on Warehouse Optimization with JavaScript

I've been applying for developer jobs even though I'm still a newbie, as I desperately want to get out of copywriting. An employer took great interest in me and sent me the test included in this repo.

I spent about six or seven hours working on this problem, to no avail, before I finally had to tell the employer I couldn't do it. I understood that I needed to iterate over the orderRepo object, add up all of the quantities picked for each item (for example, only 6 units of Item 1 were picked), and then place them on the shelves in descending order, with Shelf 12 containing the most-picked item and Shelf 1 containing the least picked.

The brick wall I ran into had to do with the complex orderRepo object. I recently went through a number of Free Code Camp exercises on the topic of complex objects in JS, so I felt confident I could tackle this problem.

What I could not figure out, for the life of me, was how to iterate over the orderRepo object and access the itemName and quantity key-value pairs. I Googled over and over, read dozens of articles, particularly [this StackOverflow question](http://stackoverflow.com/questions/11922383/access-process-nested-objects-arrays-or-json), used console.log to attempt to see what was going on with the object, and tried every possible iteration of brackets and dot notation, and I still couldn’t get it to work. For example, I tried to use Object.keys(orderRepo) to look at the keys, but it just kept returning an empty array.

I know there was something I just wasn't seeing.

I've uploaded the problem here because I'm counting this toward my #100DaysOfCode challenge. I certainly tried hard enough. And if anyone can tell me how to iterate over that bastard object, I'd be ever so happy. I'm no longer in the running for the job, so nobody is helping me "cheat" by pointing out what I'm doing wrong.
