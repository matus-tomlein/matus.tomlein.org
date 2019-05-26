---
title: Visualisation of Shopper Trajectories Using “Skeletons” of Retail Stores
authors: Matúš Tomlein and Sára Kúťková
context: Pygmalios
link: https://medium.com/pygmalios-engineering/visualizing-large-numbers-of-shopping-trajectories-using-skeletons-of-retail-stores-49374efa6cc7
date: 2019-04-25
---

Having some large retail stores with lots of daily shoppers as customers at [Pygmalios](https://pygmalios.com/), we were faced with a new problem — how to visualize thousands of shopping tracks in a way that would be useful for our users as well as computationally scalable.

For our smaller customers, we were able to provide visualisations showing trajectories of each individual track on top of a floor plan. By inspecting these trajectories, they could explore patterns in the behaviour of shoppers. However, visualisations of larger numbers of tracks were difficult to read. Overlapping tracks were hard to distinguish and finding frequent shopping paths wasn't easy for the users.

<input type="checkbox" id="mn-geohashes" className="margin-toggle" checked />
<span className="marginnote">
  Visualisation of individual tracks
</span>

![Visualisation of individual tracks](/images/blogs/pygmalios-individual-trajectories.png "")

It was also computationally expensive to transfer all the trajectory data from our APIs to client-side apps and then to generate interactive and responsive visualisations. Each shopping trajectory may contain hundreds of X, Y coordinates. Multiply that for the thousands of shoppers and you can expect request timeouts, and unresponsive user interfaces.

### Aggregation to the rescue

To face this challenge, we decided to aggregate individual tracks into common aisles that shoppers followed. Our idea was to draw lines on top of aisles and use their thickness to communicate how many shoppers passed them. This would make it easier for users to identify frequent paths as well as provide a more compact and scalable representation of the data.

<input type="checkbox" id="mn-aggregated" className="margin-toggle" checked />
<span className="marginnote">
  Aggregated visualisation of tracks on top of aisles
</span>

![Aggregated visualisation of tracks on top of aisles](/images/blogs/pygmalios-aggregated-trajectories.png "")

So how did we get there? We needed a way to identify all the aisles and their intersections in stores so that we could map the shopping tracks to them. We could, of course, draw them manually, but doing so for each store would be tedious. So we were looking for a more scalable solution to generate the “skeleton” automatically. What an exciting challenge! It took us a few tries and lots of iteration to get there. We'll try to summarize how we did it below.

## Generating “skeletons” of stores

As you would expect, we started by looking at some existing approaches. The closest to our needs was a research paper by Prentow et al. entitled [“Making Sense of Trajectory Data in Indoor Spaces”.](https://dl.acm.org/citation.cfm?id=2848213) In the paper, the authors proposed an approach to find a route network of corridors in a large hospital complex based on imprecise trajectories of employees in the hospital. We implemented the approach for our use case of finding aisles in stores. However, we discovered that although the approach may work well for identifying larger corridors, identifying small aisles that are very close to each other resulted in skeletons of retail stores that were far from what we had in mind.

Then we had a brilliant idea: How about we use information about shelves in stores to find the skeletons of retail stores. We already had polygons drawn for each shelf so we thought if we just keep inflating the polygons, eventually they'll touch and form lines exactly in the middle of aisles. We started playing around with the idea and found that it has legs. Getting to a stable algorithm that can generate skeletons for a larger variety of retail stores required some more adaptation and optimization. Among other changes, we added a step that removes small cycles of connected lines, a step that joins intersections that are very close to each other, a step that removes disconnected and short aisles, and a step that segments long aisles into smaller parts with constant length. To get a better idea of how the algorithm works, take a look at the illustrative video below.

Having generated skeletons of stores, we further had to map the individual shopping tracks of shoppers to the skeleton. We developed an algorithm that searches for the closest aisle every few centimetres along tracks and counts passes along the aisles. The algorithm ensures that imprecise positions don't cause jumps across aisles by looking at closest intersections of aisles and choosing only aisles that are connected to the previous path.

<iframe src="https://player.vimeo.com/video/332517181" width="640" height="360"
frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

In the end, we now have an algorithm that aggregates individual tracks into a much
more compact representation of shopping tracks that is reasonably small even for
weeks or months of data. Furthermore, the visualisation is much more readable for our
users even if they are looking at tracks from thousands of shoppers. It's been an
interesting challenge for us and we're looking forward to further building on the
visualisation to provide more useful information to our users!
