# EXERCISE 1

class Stack
  def initialize
    @stack = []
  end

  def add(el)
    @stack << el
  end

  def remove
    @stack.pop
  end

  def show
    @stack.dup
  end
end




# EXERCISE 2

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue << el
  end

  def dequeue
    @queue.shift
  end

  def show
    @queue.dup
  end
end



# EXERCISE 3

class Map
​
  attr_accessor :map
​
  def initialize
    @map = []
  end
​
  def assign(key, value)
    pair_index = map.index {|pair| pair[0] == key}
    pair_index ? map[pair_index][1] = value : map.push([key, value])
  end
​
  def lookup(key)
    map.each {|pair| return pair[1] if pair[0] == key}
    nil
  end
​
  def remove(key)
    map.reject! {|pair| pair[0] == key}
  end
​
  def show
    map.dup
  end
​
end
